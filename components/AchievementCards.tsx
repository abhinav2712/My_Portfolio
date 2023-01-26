import React from "react";
import { motion } from "framer-motion";
type Props = {};

export default function AchievementCards({}: Props) {
  return (
    <div>
      <article
        className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
        w-[500px] md:w-[5px] xl:w-[500px] snap-center bg-[#2b125f] p-10 hover:opacity-100
        opacity-80 cursor-pointer transition-opacity duration-200 overflow-hidden"
      >
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="w-[500px] h-[200px] rounded xl:w-[500px] xl:h-[200px] object-cover object-center"
          src="https://lh3.googleusercontent.com/1VhTzmd_hKNAv-V1c4qA9KENHSm1i5R3YWtQXFAIHjl9t_NQUo5PG8QIAT3D1IO9bHhN2jc-1N2l1tp_tQUtOX9iscVtiTBDN0Z9lXizbMJNRpyWGyCpxNquXV3bo3XGGSscdTCzvIQeWIDPC6ngl-7km_pKeY0RwV_SqGdMGPTtFTdp9wBianCrgktKHHepfNCgmzjB5kzIwp7FkN8DUQ0WT7pUNfHJJNifuGfPFXILYTWiXGrU4GeZyAkZI4rO5rBC3cQG3v3P5DC4OYOfLgE4uRDkUj0Yv9HpTCY_IknrPxpwJo8xHVQMDfQmvhvhUqaGkP_mJxg2sKDdIdUI5GDaaUnpD2-3OXMCB1fpboX2_XHInKUyJvvT-7H9AHqnryrcU6fxO2QdDB4G35092g9ogQ_hy2gjxpnhKuyGmy1dEleIaw0I66ev8f9zV8kspky_i-sCOusbHmDowHM_HCJVBikJxLX4ZYYoCu7MIr107ZieGnrMkyqnj0B7_MdnsVIpfj-LRBw1fXiMQc3A_ZEo5jcCXySBH12RN-8-1ZDDy_tzPCUs6z3TmoYqdEw9UB4m-YO-26KfFN7AGljsIeDCxQl6gWslbs9lg71S9SY6k9GEH8mgkZVyvreLQU0-vMIu9HrPalJsWS1Y7CfA_8Mhz3qTHBZJ7yZSTNCZB4NAmJvxPW2Ys2JFGLNASYW99alRDPNfjnuqyoqVCeXAzMdHvIyCvXFPTmURXWQb9oNT-LmaWqit3dSNgKdnjxnju_VZXuDKxWfhFS49YNw1cXp5pBITTeftTI8V6N8SzSbfdTwXOPqdDfNJ_TYEzynu0y5KirIo2r7JpHJS5RIudHl-ODlTF4DeeNWA2uSQw6QYXnGnUPHO_8HiHv89XR4ha4CFg1N2nwDvwA0O9-uRxb6ZSFFYK8ULebqNLhIYYZcTYcqgqT3-5Ed4vdgLGEVyHwEyQvI818k=w432-h227-no?authuser=0"
          alt=""
        />
        <div className="px-0 md:px-10">
          
          <p className="font-bold text-2xl mt-1">MindCommute</p>
          

          <p className="uppercase md:mt-[-20px] py-5 text-gray-300">
           Date 
          </p>
          <ul className="list-disc space-y-0.2 ml-5 text-lg">
            <li>Summary PointsSummary PointsSummary Points </li>
                      </ul>
        </div>
      </article>
    </div>
  );
}
