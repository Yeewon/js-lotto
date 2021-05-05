import {PRIZE} from '../utils/constants.js';
import {$modal, $modalClose} from '../utils/doms.js';
import {prizeCounter, showPrizeCount, showYield} from '../PrizeController/PrizeController.js';

export const ModalController = () => {
    $modalClose.addEventListener('click', onModalClose);
};

export const onModalClose = () => {
    $modal.classList.remove('open');
};

export const onModalOpen = () => {
    ['3', '4', '5', '5+bonus', '6'].map((match) => {
        PRIZE[match] = 0;
    });
    $modal.classList += ' open';

    prizeCounter();
    showPrizeCount();
    showYield();
};
