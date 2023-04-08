export type Params<K extends keyof HTMLElementTagNameMap> = Partial<HTMLElementTagNameMap[K]>;

export function createElement<K extends keyof HTMLElementTagNameMap>(tag: K, params: Params<K>) {
  const element = document.createElement(tag);

  for (const key in params) {
    const value = params[key];

    if (value) element[key] = value;
  }

  return element;
}
