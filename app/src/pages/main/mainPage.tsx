import {ReactNode} from 'react';
import ThemeSwitcher from "@/shared/ui/theme";
import Button, {EButtonVariant} from "@/shared/ui/buttons";
import Select from "@/shared/ui/select";
import Input, {EInputVariant} from  "@/shared/ui/inputs"


const MainPage = (): ReactNode => {

    return (
        <main className="p-4 m-5">
            <header className="text-center h-10 bg-amber-200 dark:bg-amber-700 ">
                <div>

                </div>
            </header>
            <ThemeSwitcher/>
            <section>
                <div className="text-center h-10 bg-amber-200 dark:bg-amber-700 "></div>
                <h1>sdfasdf</h1>
                <div className="grid grid-cols-8 gap-4">
                    <div>
                        <Button variant={EButtonVariant.BASE} label='Очистить корзину'/>
                    </div>
                    <div>
                        <Button variant={EButtonVariant.BASE} label='Сохранить'/>
                    </div>

                </div>
                <div className="grid grid-cols-10 gap-4">
                    <div>
                        <Button variant={EButtonVariant.ICON} icon={"ci:trash-full"}/>
                    </div>

                </div>
            </section>
            <section>
                <div>
                    <Select options={["Option 1", "Option 2", "Option 3"]}/>
                </div>
                <div>
                    <Input variant={EInputVariant.BASE} type={'text'} placeholder={'E-mail*'}/>
                    <Input variant={EInputVariant.BASE} type={'password'} placeholder={'Пароль*'}/>
                    <Input variant={EInputVariant.CHECKBOX} type={'checkbox'}/>
                    <Input variant={EInputVariant.FILE_INPUT} type={'file'} placeholder={'Загрузить'}/>

                </div>

            </section>
        </main>
    );
};

export default MainPage;