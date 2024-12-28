import LandingArticleGrids from "@/mock/LandingArticleGrids";
function LandingArticleGrid() {
    
  return (
    <div className="m-auto ">
      <li className="list-disc text-black disc-green font-extrabold text-4xl mt-20">
        اخبار و مقالات{" "}
      </li>
      <h3 className="my-2 mb-10 font-extralight text-gray-600">
        خـــودت رو با خـــبر کن !{" "}
      </h3>
      <div className="flex flex-row flex-wrap justify-center">
        {LandingArticleGrids.map((item)=>(
            
            <img key={item.id} src={item.img} alt="s" className="hoverscale" />
        ))}

      </div>
    </div>
  );
}

export default LandingArticleGrid;
