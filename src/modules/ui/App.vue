<template>
  <div>

    <layout>
      <div slot="left">
        <button class="ddv-button dark"
                v-on:click="showPopup = true">OPEN POPUP</button>
        <container :class="'padded'"
                   :style="'width:600px'">
          <ddvheader>
            <column>
              <h1>Main Title</h1>
              <h2>Subtitle goes here</h2>
            </column>            
          </ddvheader>
          <row>
            <column>
              <p>Aliquam erat volutpat. Curabitur posuere tristique elit vitae consectetur. Quisque tincidunt turpis id hendrerit pharetra. Ut vulputate justo dolor, vitae egestas nisl cursus sed. Nam a ex sem. Pellentesque vel dignissim ante. Phasellus diam mauris, tincidunt a tellus non, dapibus faucibus nunc.</p>
            </column>
            <column :style="'min-width:200px'">
              <p>Aliquam erat volutpat. Curabitur posuere tristique elit vitae consectetur. Quisque tincidunt turpis id hendrerit pharetra.</p>
            </column>
          </row>
          <row>
            <column>
              <p>Aliquam erat volutpat. Curabitur posuere tristique elit vitae consectetur. Quisque tincidunt turpis id hendrerit pharetra. Ut vulputate justo dolor, vitae egestas nisl cursus sed. Nam a ex sem. Pellentesque vel dignissim ante. Phasellus diam mauris, tincidunt a tellus non, dapibus faucibus nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel dui ac ligula condimentum eleifend non id orci. Pellentesque vestibulum orci enim, eu luctus lacus volutpat ac.</p>
              <p>Aliquam erat volutpat. Curabitur posuere tristique elit vitae consectetur.</p>
            </column>        
          </row>
        </container>
      </div>
      <div slot="right">
        <button class="ddv-button"
                v-on:click="showPopup = true">OPEN POPUP</button>
      </div>
    </layout>

    <popup :show="showPopup" @close="showPopup = false">
      <container slot="content" :class="'padded'">
        <row>
          <column>
            <h1>Popup title</h1>
          </column>
        </row>
        <row>
          <column>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum porta ex, ut aliquam libero posuere id. Duis condimentum metus nec ex varius semper. Aenean efficitur dapibus velit at pellentesque. Etiam porttitor rutrum leo, vel scelerisque urna fringilla at. Morbi massa mauris, fermentum eget lorem non, rhoncus ultrices tortor.</p>
          </column>
          <column>
            <p>Sed non blandit ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi pharetra commodo sodales. Morbi non vehicula dolor.</p>
          </column>
        </row>
        <row>
          <column>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum porta ex, ut aliquam libero posuere id. Duis condimentum metus nec ex varius semper. Aenean efficitur dapibus velit at pellentesque. Etiam porttitor rutrum leo, vel scelerisque urna fringilla at. Morbi massa mauris, fermentum eget lorem non, rhoncus ultrices tortor.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum porta ex, ut aliquam libero posuere id. Duis condimentum metus nec ex varius semper. Aenean efficitur dapibus velit at pellentesque. Etiam porttitor rutrum leo, vel scelerisque urna fringilla at. Morbi massa mauris, fermentum eget lorem non, rhoncus ultrices tortor.</p>
          </column>
        </row>
      </container>
    </popup>

  </div>
</template>

<script>
import layout from '@/common/components/page-layout/Split'
import popup from '@/common/components/Popup'
import container from '@/common/components/layout/Container'
import row from '@/common/components/layout/Row'
import column from '@/common/components/layout/Column'
import ddvheader from '@/common/components/layout/Header'
export default {
  name: 'ui',
  components: { layout, popup, container, row, column, ddvheader },
  data() {
    return {
      showPopup: false
    }
  }
}
</script>

<style lang="less">
@import "../../common/style/core.less";
</style>