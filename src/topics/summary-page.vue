<template>
    <div>
        <IntroTemplate>

            <div class="content">
                <h2 class="content-head is-center">Excepteur sint occaecat cupidatat.</h2>

                <div class="pure-g">
                    <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">

                        <h3 class="content-subhead">
                            <i class="fa fa-rocket"></i>
                            Get Started Quickly
                        </h3>
                        <p>
                            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                        </p>
                    </div>
                    <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                        <h3 class="content-subhead">
                            <i class="fa fa-mobile"></i>
                            Responsive Layouts
                        </h3>
                        <p>
                            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                        </p>
                    </div>
                    <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                        <h3 class="content-subhead">
                            <i class="fa fa-th-large"></i>
                            Modular
                        </h3>
                        <p>
                            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                        </p>
                    </div>
                    <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                        <h3 class="content-subhead">
                            <i class="fa fa-check-square-o"></i>
                            Plays Nice
                        </h3>
                        <p>
                            Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
                        </p>
                    </div>
                </div>
            </div>

            <div class="ribbon l-box-lrg pure-g">
                <div class="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
                    <img width="300" alt="File Icons" class="pure-img-responsive" src="/img/common/file-icons.png">
                </div>
                <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">

                    <h2 class="content-head content-head-ribbon">Laboris nisi ut aliquip.</h2>

                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor.
                    </p>
                </div>
            </div>

            <div class="content">
                <h2 class="content-head is-center">Dolore magna aliqua. Uis aute irure.</h2>

                <div class="pure-g">
                    <div class="l-box-lrg pure-u-1 pure-u-md-2-5">
                        <form class="pure-form pure-form-stacked">
                            <fieldset>

                                <label for="name">Your Name</label>
                                <input id="name" type="text" placeholder="Your Name">


                                <label for="email">Your Email</label>
                                <input id="email" type="email" placeholder="Your Email">

                                <label for="password">Your Password</label>
                                <input id="password" type="password" placeholder="Your Password">

                                <button type="submit" class="pure-button">Sign Up</button>
                            </fieldset>
                        </form>
                    </div>

                    <div class="l-box-lrg pure-u-1 pure-u-md-3-5">
                        <h4>Contact Us</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                        </p>

                        <h4>More Information</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>

            </div>
        </IntroTemplate>
    </div>
</template>

<script lang="ts">
import IntroTemplate from '../templates/intro-component.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        IntroTemplate
    },
    data() {
        return {
            msg: "tst"
        }
    }

})
</script>
