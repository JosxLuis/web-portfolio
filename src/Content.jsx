import { Fragment } from "react";
import PropTypes from "prop-types";
import {Nav} from './Nav'

export const Content = () => {
  return (
    <>
        

        <div className="w-full md:col-span-8 ">    

            <Nav/>

            <section className="bg-white rounded-lg px-6 py-12">
                <h2 class="text-4xl font-semibold ">About Me</h2>

                <div className="py-12">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit nemo autem voluptas, ipsum doloribus, amet odit quia at, distinctio obcaecati dolorem. Necessitatibus recusandae consequatur ad. Assumenda suscipit hic pariatur aliquid.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius incidunt a iusto n</p>

                </div>




                <h3 class="text-4xl font-semibold ">What I do!</h3>

            </section>
            
            

        </div>
      
    </>
  );
};

// Portfolio.PropTypes = {
//     title: PropTypes.string
// }
