const extractPublicIds = (data) => {
  const ids = [];
  if (data.thumbnail?.public_id) {
    ids.push(data.thumbnail.public_id);
  }
  const sections = data.sections;
  Object.values(sections).forEach((section) => {
    if (section.image?.public_id) {
      ids.push(section.image.public_id);
    }
  });
  return ids;
};

export { extractPublicIds }