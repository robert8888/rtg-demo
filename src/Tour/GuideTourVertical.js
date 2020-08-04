import React, {useState, useEffect, useCallback, useRef} from "react";
import {Tour, Step} from "react-rtg";
import {useHistory} from "react-router-dom";


const GuideTourVertical = ({bus}) => {
    const history = useHistory();
    const [isOpen, setOpen] = useState(null);
    const tourController = useRef();

    const start = useCallback(()=>{
        setOpen(true);
    }, [setOpen]);

    useEffect(()=>{
        bus.start = setOpen.bind(null, true)
    }, [bus, start, tourController])

    return (
        <div>
            <Tour isOpen={isOpen}
                  onOpen={setOpen.bind(null, true)}
                  onClose={setOpen.bind(null, false)}
                  lastStepControls={({prev}) =>
                      <button className={"button--secondary"} onClick={() => history.push("/horizontal")}>Go to next example</button>
                  }
                  className={"vertical"}>
                <Step selector={".intro__title"}
                      scrollOffset={-100}
                      placement={"top"}
                      pinPlacement={"left"}
                      pinOffset={100}
                      pinText={true}
                      className={"first step"}>
                     <p>
                         This library creates interactive <br/>
                         tour through your application
                     </p>
                </Step>
                <Step selector={".nav__item-3"}
                      onBeforeShow={() => document.querySelector(".nav__button").focus()}
                      approve={{event: "click"}}
                      placement={"bottom-left"}>
                    <p>
                        You can make some action before show step like set focus on menu element.
                        Clicking on the target will take you to the next step
                    </p>
                </Step>
                <Step selector={"[data-rtg='completed']"}
                      placement={"top-left"}
                      className={"step--dark"}>
                    <p>
                        This one have custom
                        sass/css style, you can easily overwrite
                        style of any element.
                    </p>
                </Step>
                <Step selector={"[data-rtg='newsletter']"}
                      approve={{
                          event:"click",
                          target:"#btnSubmitEmail",
                          callback: (event) => document.getElementById("inputEmail").value.match(/\w+@\w+\.\w+/)
                      }}
                      placement={"top"}
                      className={"step--newsletter"}>
                    This one has the custom css property set <br/>
                    --primary-color: orange;
                </Step>
                <Step selector={"[data-rtg='list-5']"}
                      placement={"top"}
                      backdropOffset={20}>
                     <p>
                         You can set target (selector property) to element in scrollable
                         container like this list on witch last li element is a target.
                     </p>
                </Step>
                <Step selector={".c-slider"} placement={"top"}>
                    List can be scroll horizontal event is overflow is hidden.
                </Step>

                <Step selector={"[data-rtg='slider-10']"}  placement={"top"}>
                    <p>
                        It will be scrolled to show overflow element. But if you using
                        transitions to move slides you can use hook beforeShow on Step component.
                    </p>
                </Step>
                <Step selector={"#form"}
                      placement={"top-left"}
                      approve={{
                          event:"click",
                          target:"#btnSubmit",
                          callback: e => {
                              e.preventDefault();
                              const name = document.getElementById("name");
                              const email = document.getElementById("email");
                              return (name.value && email.value);
                          }
                      }}>
                    <p>In this step you have to fill up form. If you need you can
                       block go to next step until task is not done. (this one is not blocked)
                    </p>
                </Step>
                <Step selector={"#buttonGithub"} placement={"top-left"}>
                    <p>
                        Go to git hub to check Readme. There you will find
                        instruction how to use this piece of ... code.
                    </p>
                </Step>
                <Step selector={"[data-rtg='footer']"}
                      placement={"bottom"}
                      closeOnBackdrop>
                    <p>
                        I try do my best. Click on mask to close :) <br/>
                    </p>
                    <p className={"text--center"}>
                        or
                    </p>
                </Step>

            </Tour>
        </div>
    )
}

export default GuideTourVertical;

