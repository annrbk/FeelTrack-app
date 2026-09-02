let _signOut: (() => void) | null = null;

export const registerSignOut = (fn: () => void) => {
  _signOut = fn;
};

export const triggerSignOut = () => {
  _signOut?.();
};
