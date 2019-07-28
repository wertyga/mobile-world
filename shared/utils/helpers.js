export const isServer = () => !(typeof window !== 'undefined' && window.document);

export const isClient = () => !isServer();

// eslint-disable-next-line import/no-mutable-exports
export let MediaEmitter;

// eslint-disable-next-line import/no-mutable-exports
export let setWindowLocation;


export const getLocation = () => setWindowLocation();

/* eslint-disable prefer-destructuring */
export const registerHelpers = (helpers) => {
  MediaEmitter = helpers.MediaEmitter;
  setWindowLocation = helpers.setWindowLocation;
};
