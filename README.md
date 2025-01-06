## Описание проекта

Здравствуйте! Вместо исходного API был использован другой, так как запрос к нему в большинстве случаев выдавал ощибку ERR: NoConnection даже с vpn.

Так как я делал похожий проект, то использовал уже знакомый API про который написал ниже.

В проекте использовалось API Яндекс Практикума с адресом https://mesto.nomoreparties.co/v1/cohort-magistr-2.
Его мне выдали для выполнения одной из практических работ в магистратуре.

В тестовом задании была задача вывести посты с возможностью их открыть и прочитать комментарии, как альтернатива я отобразил карточки с картинками и описанием, а по клику можно было увидеть кто оставлял лайки под этой картинкой.

Для открытия картинки использовались модальные окна(порталы). Исходя из задания возможно предполагался роутинг с переходном в компоненту поста, но я использовал вариант с модальным окном. 
Так же было отличие моего api от предлагаемого в том, что обЪект с данными людей лайкнувшими картинку был в главном объекте каждой карточки, поэтому запрос на получение данных всего один, вместо двух. 
Судя по всему предполгалась по переходу в пост будут отрисовываться комментарии, которые  перед рендером фильтровались по id поста из массива объектов с ними.
Этого к сожалению с моим API сделать было нельзя, так как все данные уже были внутри одного объекта карточки(условного поста)

Верстка проекта и файл с стилями был взят из моего готового проекта.
Ссылка на репозиторий https://github.com/Alexandrtrp/mesto-project-ff
Ссылка для открытия сайта в интернет https://alexandrtrp.github.io/mesto-project-ff/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.





