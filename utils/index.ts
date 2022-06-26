export const loadAbort = () => {
    const controller = new AbortController();
    return controller;
  };

  export const FormatDateMMMD = (dateString: string): string => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString('en-us', { month: 'short' })} ${date.getDate()}`;
  };