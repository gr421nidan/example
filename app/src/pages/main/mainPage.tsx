import {ReactNode, useState} from 'react';
import ThemeSwitcher from "@/shared/ui/theme";
import Button, {EButtonVariant} from "@/shared/ui/buttons";
import OtpCodeInput from "@/shared/ui/inputs/otp-input";
import CustomDatePicker from "@/shared/ui/date";
import CustomSelect from "@/shared/ui/select";
import SignUpForm from "@/features/auth/sign-up-form/ui";
import SignInForm from "@/features/auth/sign-in-form/ui";
import Input from "@/shared/ui/inputs/base-input";
import PasswordInput from "@/shared/ui/inputs/password-input";
import FileInput from "@/shared/ui/inputs/file-input";

const MainPage = (): ReactNode => {
    const [otp, setOtp] = useState("");
    return (

        <main className="p-6 max-w-3xl mx-auto space-y-6 ">
            <header className="text-center p-6 bg-amber-200 dark:bg-amber-700 rounded-xl shadow-md">
                <h1 className="text-2xl font-semibold text-gray-700 dark:text-white">Главная страница</h1>
            </header>

            <ThemeSwitcher/>
            <CustomSelect className="w-[248px]" defaultOption={'Права'} options={["Просмотр", "Полный доступ"]}/>
            <section className="space-y-6">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">Акции</h2>
                <div className="flex flex-col items-center gap-4">
                    <Button variant={EButtonVariant.BASE} className="w-[318px] " label='Отправить письмо'/>
                    <Button variant={EButtonVariant.BASE} className="w-[318px]" label='Сохранить'/>
                </div>

                <div className="grid grid-cols-10 gap-4">
                    <Button variant={EButtonVariant.ICON} icon={"ci:trash-full"} className="w-[40px] h-[40px]"/>
                </div>
            </section>

            <section className="space-y-6">
                <div className="space-y-4">
                    <Button variant={EButtonVariant.WITH_ICON} icon={"ep:arrow-down"} className="w-[300px]"
                            label="Фильтрация"/>
                </div>
                <div className="space-y-4">
                    <CustomDatePicker className="w-[400px]"/>

                </div>
            </section>
            <section>
                <SignUpForm/>
            </section>
            <section>
                <SignInForm/>
            </section>
            <section>
                <h2>new</h2>
                <div>
                    <OtpCodeInput value={otp} onChange={setOtp} numInputs={6} className="space-x-2"/>
                    <Input type="text" placeholder="Имя*" className="w-[474px]"/>
                    <Input type="search" placeholder="Поиск*" className="w-[770px] h-[63px]"/>
                    <Input type="email" placeholder="Email*" className="w-[474px]"/>
                    <PasswordInput placeholder="Пароль" className="w-[474px]"/>

                    <FileInput placeholder="Загрузить"/>


                </div>
            </section>
        </main>
    );
};

export default MainPage;