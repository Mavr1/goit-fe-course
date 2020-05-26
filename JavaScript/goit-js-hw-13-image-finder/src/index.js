import './styles.css';
import 'basiclightbox/dist/basicLightbox.min.css';
import './js/searchForm';
import './js/lightbox';
// import './js/infiniteScroll'; так и не заработал - CORS!

//TODO:
//[x] Зарегистрируйся и получи ключ.
//[x] Pixabay API:
// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
// Pixabay API поддерживает пагинацию, пусть в ответе приходит по 12 объектов,
// установлено в параметре per_page. По умолчанию параметр page равен 1. При каждом
// последующем запросе page увеличивается на 1, а при поиске по новому ключевому
// слову необходимо сбрасывать его значение в 1.

//[x] Форма поиска.
//[x] Галерея изображений.
//[x] Карточка изображения.
//[x] Для иконок используются Material icons. Для их корректной работы достаточно в HTML-файле добавить ссылку на веб-шрифт.
//[x] Модальное окно, например basicLightbox.
//[] FIXME: Бесконечную загрузкуа при скроле, используя плагин Infinite Scroll. - не получилось
