import { Button } from "@mantine/core";
import { useState } from "react";
import MakePage from "./MakePage";

export function LandingPage() {
  const sadEmojies = ["😖", "☹", "😕", "😔", "🫨", "😱", "😩", "🤕", "😒", "😏"];
  const [sadEmojiIndex, setSadEmojiIndex] = useState(0);
  const [showModal, setShowModal] = useState(false)


  const urlSadEmojiesArr = [
    "1f48c",
    "1f974",
    "1f611",
    "1f914",
    "1f61e",
    "1f622",
    "1f623",
    "1f629",
    "1f633",
    "1fae4",
  ];

  const noButtonLinersArr = [
    "Give love a chance, let's make Valentine's Day extra special!",
    "Say yes and let's paint the town red with love!",
    "Just a click away from making hearts flutter! Click yes?",
    "Love is in the air, let's catch it together! Click yes!",
    "Life's too short to say no to love. Click yes and let's make magic!",
    "Just one click closer to a Valentine's adventure! Click yes!",
    "Every love story starts with a yes. Let's write ours together?",
    "A world of love awaits on the other side of that click. Say yes?",
    "Why wait for Cupid's arrow when we can create our own love story? Click yes!",
    "Let's turn that 'no' into a 'yes' and make memories to cherish forever!",
  ];

  const [convinceTextIndex, setConvinceTextIndex] = useState(0);

  return (
    <div
      className="w-screen h-screen  flex flex-col items-center justify-center px-4 relative"
      style={{
        backgroundImage: `url('https://hips.hearstapps.com/hmg-prod/images/valentines-day-zoom-backgrounds-hearts-1643038425.jpeg?crop=1xw:1xh;center,top&resize=980:*')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute text-[10rem] z-20">
        <div></div>
      </div>
      <div className="flex flex-col items-center space-y-6">
      <span className="font-bold text-[2rem] text-center">
         Dear Ratan Kumar Yadav 💓
        </span>
        <span className="font-bold text-[3rem] text-center">
          Will you be my valentine? 
        </span>

        <div className="flex flex-row justify-between mt-4 w-full">
          <Button variant="light" size="lg" color="green.6 ">
            Yes 🥰
          </Button>
          <div>
            <img
              className="w-16 h-16"
              src={`https://fonts.gstatic.com/s/e/notoemoji/latest/${urlSadEmojiesArr[sadEmojiIndex]}/512.gif`}
              alt="😆"
              width="64"
              height="64"
            />
          </div>
          <Button
            variant="light"
            // className="w-28"
            onClick={() => {
              setConvinceTextIndex((prevValue) => {
                if (prevValue + 1 > noButtonLinersArr.length - 1) {
                  return 0;
                }
                return prevValue + 1;
              });

              setSadEmojiIndex((prevValue) => {
                if (prevValue + 1 > urlSadEmojiesArr.length - 1) {
                  return 1;
                }
                return prevValue + 1;
              });
            }}
            size="lg"
            color="gray.6"
          >
            <span className="font-bold">No {sadEmojies[sadEmojiIndex]}</span>
          </Button>
        </div>

        <div className=" mt-2 font-semibold ml-4 text-blue-950 w-48 max-h-20 lg:w-96 text-[1.5rem] ">
          {noButtonLinersArr[convinceTextIndex]}
        </div>
        
      </div>
      <div onClick={() => {
        setShowModal(true)
      }} className="mt-16 text-[1.5rem] underline">
            Make your own 
        </div>
       {
showModal && <MakePage hideModal={setShowModal}/>

       } 
    </div>
  );
}
