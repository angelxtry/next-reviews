import { marked } from 'marked';
import qs from 'qs';

interface ReviewImage {
  id: number;
  attributes: {
    url: string;
  };
}

interface Review {
  id: number;
  attributes: {
    slug: string;
    title: string;
    subtitle: string;
    publishedAt: string;
    body: string;
    image: {
      data: ReviewImage[];
    };
  };
}

interface Params {
  filters?: { [key: string]: { $eq: string } };
  fields?: string[];
  populate?: { [key: string]: { fields: string[] } };
  sort?: string[];
  pagination?: { pageSize: number; withCount?: boolean };
}

const CmsUrl = 'http://127.0.0.1:1337' as const;

const fetchReviews = async (params: Params) => {
  const url = `${CmsUrl}/api/reviews?${qs.stringify(params, { encodeValuesOnly: true })}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`CMS returned ${response.status} for ${url}`);
  }
  return (await response.json()) as { data: Review[] };
};

const toReview = (item: Review) => {
  const {
    attributes: { slug, title, subtitle, publishedAt, image },
  } = item;
  return {
    slug,
    title,
    subtitle,
    date: publishedAt.slice(0, 'yyyy-mm-dd'.length),
    image: CmsUrl + image.data[0].attributes.url,
  };
};

const getReview = async (slug: string) => {
  const { data } = await fetchReviews({
    filters: { slug: { $eq: slug } },
    fields: ['slug', 'title', 'subtitle', 'publishedAt', 'body'],
    populate: { image: { fields: ['url'] } },
    sort: ['publishedAt:desc'],
    pagination: { pageSize: 1, withCount: false },
  });
  const item = data[0];
  return {
    ...toReview(item),
    body: marked(item.attributes.body, { headerIds: false, mangle: false }),
  };
};

const getReviews = async (pageSize: number) => {
  const { data } = await fetchReviews({
    fields: ['slug', 'title', 'subtitle', 'publishedAt'],
    populate: { image: { fields: ['url'] } },
    sort: ['publishedAt:desc'],
    pagination: { pageSize },
  });
  return data.map((item) => toReview(item));
};

const getSlugs = async () => {
  const { data } = await fetchReviews({
    fields: ['slug'],
    sort: ['publishedAt:desc'],
    pagination: { pageSize: 100 },
  });
  return data.map((item) => item.attributes.slug);
};

export { getReview, getReviews, getSlugs };
