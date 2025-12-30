// Fetch logo directly from Contentful REST API
const fetchLogoFromContentful = async (): Promise<string | null> => {
  try {
    const spaceId = 'uwwxzch580v2';
    const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || '';

    if (!accessToken) {
      console.warn('Contentful access token not found');
      return null;
    }

    const response = await fetch(
      `https://cdn.contentful.com/spaces/${spaceId}/environments/master/assets?fields.title=Logo - VSG Secretary [Red & Transparent]&limit=1`,
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
