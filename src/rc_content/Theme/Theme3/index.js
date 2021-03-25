import React from "react";
import T3_Header from "./header";
import T3_CSS from "./mycss";
import Banner from "./content/banner";
import T3_JS from "./myjs";
import T3_Footer from "./footer";

function Theme3(props) {
    //console.log('Theme3', props);

    return (
        <div className="site-wrap">
            {
                props ?
                    Object.keys(props).map((item, idx) => {
                        //console.log('item', props[item]);
                        switch (item) {
                            case 'header':
                                return (<T3_Header key={idx} props={props[item]} />)
                            case 'banner':
                                return (<Banner key={idx} props={props[item]} currentTheme={props.theme} />)
                            case 'footer':
                                return (<T3_Footer key={idx} props={props[item]} />);
                            default:
                                return '';
                        }
                    })
                    : ''
            }
            <T3_JS />
        </div>
    )
}

export default Theme3;
