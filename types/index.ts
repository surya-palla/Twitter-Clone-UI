export type Tweet = {
  id: string;
  content: string;
  user: User;
  image?: string;
  numberOfComments?: number;
  numberOfRetweets?: number;
  numberOfLikes?: number;
  impressions?: number;
};

export type User = {
  image?: string;
  name: string;
  username: string;
};
