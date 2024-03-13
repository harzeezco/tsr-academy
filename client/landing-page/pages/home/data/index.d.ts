export type HeaderNavProp = {
  label: string;
  route: string;
};

export type CardType = {
  coverBackground: string;
  desc: string;
  label: string;
  src: string;
};

export type AboutDetailsType = {
  coverBackground: string;
  desc: string;
  label: string;
  src: string;
};

export type MetricProp = {
  count: string;
  icon: string;
  title: string;
};

export type CourseProp = {
  difficulty: string;
  difficultyRate: string;
  metrics: MetricProp[];
  rating: number;
  thumbnail: string;
  title: string;
};
