import React from 'react';
import SiteLayout from '../../components/Layout/SiteLayout';
import { withTranslation } from '../../config/i18n.js';

const Dashboard = ({ t }) => <SiteLayout>Dashboard</SiteLayout>;

export default withTranslation('common')(Dashboard);
