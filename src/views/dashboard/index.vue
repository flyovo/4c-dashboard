<template>
  <div>
    <dashboard-kiosk-receipt-status></dashboard-kiosk-receipt-status>
    <dashboard-status-use-by-menu></dashboard-status-use-by-menu>
    <dashboard-receipt-waiting-time></dashboard-receipt-waiting-time>
    <dashboard-certificate-issuance-status></dashboard-certificate-issuance-status>
    <back-to-top :visibility-height="300" :back-position="50" transition-name="fade" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DashboardKioskReceiptStatus from './DashboardKioskReceiptStatus.vue'
import DashboardStatusUseByMenu from './DashboardStatusUseByMenu.vue'
import DashboardReceiptWaitingTime from './DashboardReceiptWaitingTime.vue'
import DashboardCertificateIssuanceStatus from './DashboardCertificateIssuanceStatus.vue'
import { dashboard } from '../../router/modules/router-constants'
import BackToTop from '@/components/BackToTop/index.vue'
@Component({
  name: 'Dashboard',
  components: {
    DashboardKioskReceiptStatus,
    DashboardStatusUseByMenu,
    DashboardReceiptWaitingTime,
    DashboardCertificateIssuanceStatus,
    BackToTop
  }
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.app-main > div {
  width: 100%;
  height: 100%;
  display: grid;
  column-gap: 10px;
  grid-template-columns: 1fr 1fr;
}

.mobile {
  // &.openSidebar {
  .app-main > div {
    flex-grow: 0;
    grid-template-columns: none;
  }
}
</style>
