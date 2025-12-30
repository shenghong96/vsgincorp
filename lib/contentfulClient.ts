// Fetch logo directly from Contentful REST API
const fetchLogoFromContentful = async (): Promise<string | null> => {
  try {
    const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
    const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

    if (!spaceId || !accessToken) {
      console.warn('Contentful configuration missing. Please check VITE_CONTENTFUL_SPACE_ID and VITE_CONTENTFUL_ACCESS_TOKEN.');
      return null;
    }

    const response = await fetch(
      `https://cdn.contentful.com/spaces/${spaceId}/environments/master/assets?fields.title=Company Logo&limit=1`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const data = await response.json();
    if (data.items && data.items.length > 0 && data.items[0].fields?.file?.url) {
      return `https:${data.items[0].fields.file.url}`;
    }
    return null;
  } catch (error) {
    console.warn('Could not fetch logo from Contentful:', error);
    return null;
  }
};

export default fetchLogoFromContentful;
