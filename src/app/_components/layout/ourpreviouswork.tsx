import path from "path";
import fs from "fs";
import Carousel from "./carousel";
function generateURL(item: string) {
  return { url: `/images/previouswork/${item}` };
}
const getImages = async (): Promise<string[]> => {
  {
    const directory = path.join(process.cwd(), "public/images/previouswork");
    const fileNames = fs
      .readdirSync(directory)
      .filter((file) => fs.statSync(path.join(directory, file)).isFile());
    return await new Promise((resolve) => {
      resolve(fileNames);
    });
  }
};
export default async function OurPreviousWork() {
  const carouselContent = await getImages();
  const images = carouselContent.map((item: string) => generateURL(item));

  return (

    <div className="w-full my-5 bg-[#154992] mx-auto p-4 sm:px-6 lg:px-8" id="our-work">
      <div className="p-4">
        <div className="mx-auto max-w-xl lg:max-w-none">
          <div className="text-center">
            <h1 className="text-4xl secondary font-semibold tracking-tight text-white">Our Previous Work</h1>
          </div>
        </div>
        <div className="p-4">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className="text-center">
              <Carousel content={images} />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
