import Job from '../../components/Job';
import { FormProvider } from '../../components/FormContext';
import Header from '../../components/Header';
import Resume from '../../components/Resume';
import { RecoilRoot } from 'recoil';
import styles from '../../styles/Home.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function job() {
    return (
        <FormProvider>
            <RecoilRoot>
                <div className={styles.App}>
                    <Header />
                    <Job />
                    <Resume />
                </div>
            </RecoilRoot>
        </FormProvider>
    )
}
