import React from "react";
import SocialCard from "../SocialCard/SocialCard";
import "./Social.css";
import facebook from "../../img/fb-social.svg"
import instagram from "../../img/in-social.svg"
import vk from "../../img/vk-social.svg"

function Social() {
    return (
        <section className="social" id="social">
            <h2>SOCIAL</h2>
            <div className="social-content">
                <SocialCard
                    link="https://vk.com/ingush_photoclub"
                    title="Vkontakte"
                    icoImg={vk}
                />
                <SocialCard
                    link="https://www.instagram.com/imagoinst/"
                    title="Instagram"
                    icoImg={instagram}
                />
                <SocialCard
                    link="https://www.facebook.com/ingush.photoclub"
                    title="Facebook"
                    icoImg={facebook}
                />
            </div>
        </section>
    );
}

export default Social;
