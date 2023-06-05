type Props = {
  title: string;
  body: string;
};
const Article = ({ title, body }: Props) => {
  return (
    <>
      <h2 className="text-4xl font-bold mb-2">{title}</h2>
      <p className="text-Darkgray">{body}</p>
    </>
  );
};
export default Article;

//
