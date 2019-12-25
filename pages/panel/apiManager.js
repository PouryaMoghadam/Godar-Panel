import React from 'react';
import SiteLayout from '../../components/Layout/SiteLayout';
import { withTranslation } from '../../config/i18n.js';

const ApiManager = ({ t }) => <SiteLayout>ApiManager</SiteLayout>;

export default withTranslation('common')(ApiManager);
