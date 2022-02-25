import Basic from '../components/Basic';
import { FormProvider } from '../components/FormContext';
import Header from '../components/Header';
import Resume from '../components/Resume';
import { RecoilRoot } from 'recoil';
import styles from '../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function basic() {
    return (
        <FormProvider>
            <RecoilRoot>
                <div className={styles.App}>
                    <Header />
                    <Basic />
                    <Resume />
                </div>
            </RecoilRoot>
        </FormProvider>
    )
}