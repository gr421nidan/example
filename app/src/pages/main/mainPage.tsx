import { ReactNode } from 'react';
import ThemeSwitcher from "@/shared/ui/theme";
import Button, { EButtonVariant } from "@/shared/ui/buttons";
import Select from "@/shared/ui/select";
import Input, { EInputVariant } from "@/shared/ui/inputs/input.tsx";
import OtpCodeInput from "@/shared/ui/inputs/otpInput.tsx";
import CustomDatePicker from "@/shared/ui/date";

const MainPage = (): ReactNode => {
    return (
        <main className="p-6 max-w-3xl mx-auto space-y-6">
            <header className="text-center p-6 bg-amber-200 dark:bg-amber-700 rounded-xl shadow-md">
                <h1 className="text-2xl font-semibold text-gray-700 dark:text-white">Главная страница</h1>
            </header>

            <ThemeSwitcher />

            <section className="space-y-6">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">Акции</h2>
                <div className="flex flex-col items-center gap-4">
                    <Button variant={EButtonVariant.BASE} className="w-[318px] " label='Отправить письмо' />
                    <Button variant={EButtonVariant.BASE} className="w-[318px]" label='Сохранить' />
                </div>

                <div className="grid grid-cols-10 gap-4">
                    <Button variant={EButtonVariant.ICON} icon={"ci:trash-full"} />
                </div>
            </section>

            <section className="space-y-6">
                <div className="mb-4">
                    <Select defaultOption={'Права'} options={["Просмотр", "Полный доступ"]} className="w-[474px]" />
                </div>

                <div className="space-y-4">
                    <Input variant={EInputVariant.BASE} className="w-[474px]" type='text' placeholder='E-mail*' />
                    <Input variant={EInputVariant.CHECKBOX} type='checkbox' className="h-[24px] w-[24px]" />
                    <Input variant={EInputVariant.FILE_INPUT} type='file' placeholder='Загрузить'  />
                </div>

                <div>
                    <OtpCodeInput numInputs={6} inputMode="numeric" className="space-x-2" />
                </div>

                <div className="space-y-4">
                    <Input variant={EInputVariant.SEARCH} className="w-[300px]" placeholder='Поиск' />
                </div>

                <div className="space-y-4">
                    <Input variant={EInputVariant.PASSWORD} className="w-[474px]" placeholder='Пароль*' />
                </div>
                <div className="space-y-4">
                    <Input variant={EInputVariant.DATE} className="w-[170px]" />
                </div>
                <div className="space-y-4">
                    <CustomDatePicker  />
                </div>
            </section>
        </main>
    );
};

export default MainPage;