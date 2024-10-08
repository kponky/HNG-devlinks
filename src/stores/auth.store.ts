
import { CreateUserInput, LoginUserInput } from "@/Interfaces/auth.interface";
import { UpdateProfileInput, User } from "@/Interfaces/user.interface";
import { auth, db, storage } from "@/lib/firebaseConfig";
import { TOKEN_NAME } from "@/utils/constants";
import { generateDisplayName } from "@/utils/helpers";
import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateEmail, updateProfile } from "firebase/auth";

import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { create } from "zustand";

interface IAuthStore {
  loading: boolean;
  loadingUser: boolean;
  loadingSave: boolean;
  user: User | null;
  setUser: (user: User) => void;
  createUser: (input: CreateUserInput) => Promise<void>;
  login: (input: LoginUserInput) => Promise<void>;
  logout: () => void;
  initializeAuth: () => void;
  updateUserProfile: (
    profile: UpdateProfileInput,
    file?: File | null
  ) => Promise<void>;
  fetchUserData: (uid: string) => Promise<void>;
}

const getFirebaseErrorMessage = (error: FirebaseError) => {
  switch (error.code) {
    case "auth/email-already-in-use":
      return "The email address already exist";
    case "auth/invalid-email":
      return "The email address is not valid.";
    case "auth/operation-not-allowed":
      return "Email/password accounts are not enabled.";
    case "auth/weak-password":
      return "The password is too weak.";
    case "auth/user-disabled":
      return "The user account has been disabled.";
    case "auth/user-not-found":
      return "There is no user corresponding to the given email.";
    case "auth/wrong-password":
      return "The password is invalid for the given email.";
    case "auth/invalid-credential":
      return "Invalid login credendtials.";
    case "auth/too-many-requests":
      return "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later";
    default:
      return error.message;
  }
};

export const useAuthStore = create<IAuthStore>((set) => ({
  loading: false,
  loadingUser: false,
  loadingSave: false,
  user: null,
  setUser: (user: User) => set({ user }),
  createUser: async (input) => {
    try {
      set({ loading: true });
      const { user } = await createUserWithEmailAndPassword(
        auth,
        input.email,
        input.password
      );

      const displayName = generateDisplayName(input.email);
      await updateProfile(user, { displayName });

      const userData: User = {
        uid: user.uid,
        email: user.email || "",
        displayName: user.displayName || "",
        photoURL: user.photoURL || "",
      };

      await setDoc(doc(db, "users", user.uid), userData);

      set({ user: userData });

      const token = await user.getIdToken();
      Cookies.set(TOKEN_NAME, token);

      toast.success("Account Created Successfully");
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
      const errorMsg = getFirebaseErrorMessage(error as FirebaseError);
      toast.error(errorMsg);
    } finally {
      set({ loading: false });
    }
  },
  login: async (input) => {
    try {
      set({ loading: true });
      const { user } = await signInWithEmailAndPassword(
        auth,
        input.email,
        input.password
      );
      set({
        user: {
          uid: user.uid,
          email: user.email || "",
          displayName: user.displayName || "",
          photoURL: user.photoURL || "",
        },
      });

      const token = await user.getIdToken();
      Cookies.set(TOKEN_NAME, token);
      toast.success("Login Successful");
      window.location.href = "/editor";
    } catch (error) {
      console.log(error);
      const errorMsg = getFirebaseErrorMessage(error as FirebaseError);
      toast.error(errorMsg);
    } finally {
      set({ loading: false });
    }
  },
  logout: async () => {
    window.location.href = "/login";
    Cookies.remove(TOKEN_NAME);
    await signOut(auth);
    set({ user: null });
  },
  updateUserProfile: async (profile, file) => {
    try {
      set({ loadingSave: true });

      if (auth.currentUser) {
        const { firstName, lastName, email } = profile;

        // Update Firebase Auth profile
        const displayName = `${firstName} ${lastName}`;

        if (email && email !== auth.currentUser.email) {
          await updateEmail(auth.currentUser, email);
        }

        let photoUrl = auth.currentUser.photoURL;
        if (file) {
          const storageRef = ref(
            storage,
            `profilePhotos/${auth.currentUser.uid}`
          );
          await uploadBytes(storageRef, file);
          photoUrl = await getDownloadURL(storageRef);
        }

        await updateProfile(auth.currentUser, {
          displayName,
          photoURL: photoUrl,
        });

        // Update Firestore document
        const userDocRef = doc(db, "users", auth.currentUser.uid);
        const userDocUpdates: Partial<User> = {
          displayName,
          email,
          photoURL: photoUrl || "",
        };

        await updateDoc(userDocRef, userDocUpdates);

        set((state) => ({
          user: {
            ...state.user,
            ...profile,
            displayName,
            photoURL: photoUrl,
          } as User,
        }));

        toast.success("Profile updated successfully");
      } else {
        toast.error("No user is currently signed in");
      }
    } catch (error) {
      console.log(error);
      const errorMsg = getFirebaseErrorMessage(error as FirebaseError);
      toast.error(errorMsg);
    } finally {
      set({ loadingSave: false });
    }
  },
  initializeAuth: () => {
    try {
      set({ loadingUser: true });
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          set({
            user: {
              uid: user.uid,
              email: user.email || "",
              displayName: user.displayName || "",
              photoURL: user.photoURL || "",
            },
          });
        } else {
          Cookies.remove(TOKEN_NAME);
          set({ user: null });
        }
      });

      return () => {
        unsubscribe();
        set({ loadingUser: false });
      };
    } catch (error) {
      console.log(error);
    }
  },
  fetchUserData: async (uid) => {
    try {
      set({ loading: true });
      const userDocRef = doc(db, "users", uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        set({ user: userDoc.data() as User });
      }
    } catch (error) {
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
}));
