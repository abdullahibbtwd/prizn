import { Navigate, Route, Routes } from 'react-router-dom'
import { CmsLayout } from '@/cms/CmsLayout'
import CmsDashboard from '@/cms/pages/Dashboard'
import CmsStoriesPage from '@/cms/pages/StoriesPage'
import CmsStoryEditorPage from '@/cms/pages/StoryEditorPage'
import CmsSubmissionsPage from '@/cms/pages/SubmissionsPage'
import CmsDonationsPage from '@/cms/pages/DonationsPage'
import CmsPartnershipsPage from '@/cms/pages/PartnershipsPage'
import {
  CmsAiPage,
  CmsAnalyticsPage,
  CmsAuthorsPage,
  CmsMediaPage,
  CmsNewsletterPage,
  CmsOrdersPage,
  CmsPlacesPage,
  CmsProductsPage,
  CmsRolesPage,
  CmsSeoPage,
  CmsSeriesPage,
  CmsSettingsPage,
  CmsShopPage,
  CmsSocialPage,
  CmsTraditionsPage,
  CmsUsersPage,
} from '@/cms/pages/ContentPages'

export default function CmsApp() {
  return (
    <Routes>
      <Route element={<CmsLayout />}>
        <Route index element={<CmsDashboard />} />
        <Route path="stories" element={<CmsStoriesPage />} />
        <Route path="stories/:id" element={<CmsStoryEditorPage />} />
        <Route path="series" element={<CmsSeriesPage />} />
        <Route path="places" element={<CmsPlacesPage />} />
        <Route path="traditions" element={<CmsTraditionsPage />} />
        <Route path="authors" element={<CmsAuthorsPage />} />
        <Route path="media" element={<CmsMediaPage />} />
        <Route path="submissions" element={<CmsSubmissionsPage />} />
        <Route path="donations" element={<CmsDonationsPage />} />
        <Route path="partnerships" element={<CmsPartnershipsPage />} />
        <Route path="newsletter" element={<CmsNewsletterPage />} />
        <Route path="social" element={<CmsSocialPage />} />
        <Route path="seo" element={<CmsSeoPage />} />
        <Route path="analytics" element={<CmsAnalyticsPage />} />
        <Route path="shop" element={<CmsShopPage />} />
        <Route path="orders" element={<CmsOrdersPage />} />
        <Route path="products" element={<CmsProductsPage />} />
        <Route path="users" element={<CmsUsersPage />} />
        <Route path="roles" element={<CmsRolesPage />} />
        <Route path="settings" element={<CmsSettingsPage />} />
        <Route path="ai" element={<CmsAiPage />} />
        <Route path="*" element={<Navigate to="/cms" replace />} />
      </Route>
    </Routes>
  )
}
