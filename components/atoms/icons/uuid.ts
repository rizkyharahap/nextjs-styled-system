let lastId = 0;

export function uuid(id: string): string {
  lastId++;
  return `icon-${id}-${lastId}`;
}
