import React from "react";
import BulletPoint from "./common/BulletPoint";
import { VscDebug } from "react-icons/vsc";
import { MdOutlinePersonPin } from "react-icons/md";
import { RiQuestionAnswerLine } from "react-icons/ri";
import Layout from "./common/Layout";

const OurServices = () => {
  return (
    <Layout>
      <section className="flex flex-col justify-evenly items-center gap-4">
        <h2 className="text-6xl mb-10"> Our Services </h2>
        <section className="flex flex-col justify-evenly items-center gap-6">
          <div className="flex flex-col justify-start items-start gap-12">
            <h3 className="text-4xl font-bold"> One-on-one live mentorship </h3>
            <div className="flex flex-col justify-center items-start gap-4 w-full mb-12">
              <BulletPoint
                image={<VscDebug />}
                text={"Debug with the help of an expert"}
              />
              <BulletPoint
                image={<MdOutlinePersonPin />}
                text={"Personalize your learning experience"}
              />
              <BulletPoint
                image={<RiQuestionAnswerLine />}
                text={"Get answers to complex problems"}
              />
            </div>
          </div>
          <div className="aspect-square">
            <img
              src="https://images.unsplash.com/photo-1623685463160-f3f501540a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVhY2hlcnxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="#"
              className="w-full h-full rounded-md"
            />
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default OurServices;


// border border-solid border-secondary