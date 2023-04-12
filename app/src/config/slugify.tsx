const Slugify = (title: string | undefined) => {
  const slug = title?.trim().toLowerCase().split(' ').join('-');
  return slug;
};

const Unslugify = (slug: string | undefined) => {
  const title = slug?.trim().split('-').join(' ').toUpperCase();
  return title;
};
export { Unslugify, Slugify };
