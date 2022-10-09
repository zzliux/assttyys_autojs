import schemeList from '@/system/webviewEvents/schemeList';
import funcList from '@/system/webviewEvents/funcList';
import settings from '@/system/webviewEvents/settings';
import about from '@/system/webviewEvents/about';
import schedule from '@/system/webviewEvents/schedule';

export default function webviewEvents() {
    schemeList();
    funcList();
    settings();
    about();
    schedule();
}