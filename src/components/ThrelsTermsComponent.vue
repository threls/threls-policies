<template>
  <div>
    <threls-policies-menu-component/>
    <section class="border-top py-5">
      <b-container>
        <b-row>
          <b-col
            md="8"
            offset-md="2"
            class="text-center">
            <h3>Terms of Service</h3>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="border-top py-5">
      <b-container>
        <b-row>
          <b-col
            md="8"
            offset-md="2"
            class="text-justify">
            <h4>1. Terms</h4>
            <p>By accessing the website at {{ params.website }}, you
            are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that
            you are responsible for compliance with any applicable local laws. If you do not agree with any of these
            terms, you are prohibited from using or accessing this site. The materials contained in this website are
            protected by applicable copyright and trademark law.</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="border-top py-5">
      <b-container>
        <b-row>
          <b-col
            md="8"
            offset-md="2"
            class="text-justify">
            <h4>2. Use License</h4>
            <ol type="a">
              <li>Permission is granted to temporarily download one copy of the materials (information or software) on
                {{ params.entity }}'s website for personal, non-commercial transitory viewing only. This is the grant of a
                license, not a transfer of title, and under this license you may not:
                <ol type="i">
                  <li>modify or copy the materials;</li>
                  <li>use the materials for any commercial purpose, or for any public display (commercial or
                  non-commercial);
                  </li>
                  <li>attempt to decompile or reverse engineer any software contained on {{ params.entity }}'s website;</li>
                  <li>remove any copyright or other proprietary notations from the materials; or</li>
                  <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                </ol>
              </li>
              <li>This license shall automatically terminate if you violate any of these restrictions and may be
              terminated by {{ params.entity }} at any time. Upon terminating your viewing of these materials or upon the
              termination of this license, you must destroy any downloaded materials in your possession whether in
              electronic or printed format.
              </li>
            </ol>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="border-top py-5">
      <b-container>
        <b-row>
          <b-col
            md="8"
            offset-md="2"
            class="text-justify">
            <h4>3. Disclaimer</h4>
            <ol type="a">
              <li>The materials on {{ params.entity }}'s website are provided on an 'as is' basis. {{ params.entity }} makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
              without limitation, implied warranties or conditions of merchantability, fitness for a particular
              purpose, or non-infringement of intellectual property or other violation of rights.
              </li>
              <li>Further, {{ params.entity }} does not warrant or make any representations concerning the accuracy, likely
              results, or reliability of the use of the materials on its website or otherwise relating to such
              materials or on any sites linked to this site.
              </li>
            </ol>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="border-top py-5">
      <b-container>
        <b-row>
          <b-col
            md="8"
            offset-md="2"
            class="text-justify">
            <h4>4. Limitations</h4>
            <p>In no event shall {{ params.entity }} or its suppliers be liable for any damages (including, without
            limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or
            inability to use the materials on {{ params.entity }}'s website, even if {{ params.entity }} or a {{ params.entity }}
              authorized representative has been notified orally or in writing of the possibility of such damage.
              Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for
              consequential or incidental damages, these limitations may not apply to you.</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="border-top py-5">
      <b-container>
        <b-row>
          <b-col
            md="8"
            offset-md="2"
            class="text-justify">
            <h4>5. Accuracy of materials</h4>
            <p>The materials appearing on {{ params.entity }}'s website could include technical, typographical, or
            photographic errors. {{ params.entity }} does not warrant that any of the materials on its website are accurate,
            complete or current. {{ params.entity }} may make changes to the materials contained on its website at any time
            without notice. However {{ params.entity }} does not make any commitment to update the materials.</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="border-top py-5">
      <b-container>
        <b-row>
          <b-col
            md="8"
            offset-md="2"
            class="text-justify">
            <h4>6. Links</h4>
            <p>{{ params.entity }} has not reviewed all of the sites linked to its website and is not responsible for the
            contents of any such linked site. The inclusion of any link does not imply endorsement by {{ params.entity }} of
            the site. Use of any such linked website is at the user's own risk.</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="border-top py-5">
      <b-container>
        <b-row>
          <b-col
            md="8"
            offset-md="2"
            class="text-justify">
            <h4>7. Modifications</h4>
            <p>{{ params.entity }} may revise these terms of service for its website at any time without notice. By using this
            website you are agreeing to be bound by the then current version of these terms of service.</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="border-top py-5">
      <b-container>
        <b-row>
          <b-col
            md="8"
            offset-md="2"
            class="text-justify">
            <h4>8. Governing Law</h4>
            <p>These terms and conditions are governed by and construed in accordance with the laws of Malta and you
            irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({
  name: 'threls-terms-component'
})
export default class ThrelsTermsComponent extends Vue {

  get params() {
    return this.$threlsCookie.params
  }

}
</script>
