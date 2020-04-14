import * as React from 'react';

let count = 1;
const prefix = 'id_';

function createUniqueId(): string {
  return prefix + (count++).toString();
}

function useUniqueId() {
  const [id] = React.useState(() => createUniqueId());
  return id;
}

export { createUniqueId, useUniqueId };
