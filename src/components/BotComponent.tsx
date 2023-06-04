import darkImg from "../assets/images/image-about-dark.jpg";
import lightImg from "../assets/images/image-about-light.jpg";

const BotComponent = () => {
  const body =
    "Our multifunctional collection blends design and function to suit your individual taste.Make each room unique, or pick a cohesive theme that best express your interests and what inspires you.Find the furniture pieces you need, from traditional to contemporary styles or anything in between.Product specialists are available to help you create your dream space.";
  return (
    <>
      <img src={darkImg} alt="dark-chair-img" className="h-full" />
      <article className="py-8 flex flex-col gap-4 justify-center px-4 bg-White lg:col-span-3 lg:h-[calc(100vh-600px)] lg:px-12" id="about">
        <h2 className="text-xl mb-2 uppercase tracking-widest font-semibold">
          About our furniture
        </h2>
        <p className="text-Darkgray">{body}</p>
      </article>
      <img src={lightImg} alt="light-chair-img" className="lg:h-full" />
    </>
  );
};
export default BotComponent;
