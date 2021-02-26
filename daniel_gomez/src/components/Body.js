import React from 'react'
import Typed from 'typed.js';
import Typical from 'react-typical'

const Body = () =>{

    /*const typed = new Typed ('.typed',{
        strings : [
            'Java',
            'Full',
            'Scrum'
        ]
    });*/


    const sysout = 'System.out.println(';

    return(

        <div className="text-white container-fluid"> 

            <div class="row align-items-center">
                <div class="col">
                    <h1 className = 'h1'>' '
                        <Typical 
                            //loop = {Infinity}
                            //wrapper = 'b'
                            steps = {[
                                'System.out.println( Hello world! I\'am Daniel Gómez );',1000,
                            ]}
                        />
                        </h1>

                    <h3 className = 'h3'> I'am{' '}
                        <Typical 
                            loop = {Infinity}
                            wrapper = 'b'
                            steps = {[
                                'Java Developer',1000,
                                'FullStack Developer', 1000,
                                'Scrum Master', 1000
                            ]}
                        />
                    </h3> 
                </div>
                <div class="col">
                One of three columns
                </div>
                <div class="col">
                One of three columns
                </div>
            </div>


            
        </div>
    )
}

export default Body;