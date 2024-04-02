'use strict';
/* exported defaults */
function defaults(target, source) {
  for (const key in source) {
    if (!(key in target)) {
      target[key] = source[key];
    }
  }
  return 0;
}
