import {
  ChartCircle,
  Clock,
  CloseCircle,
  TickCircle,
} from 'iconsax-react-native';
import AppColors from '../theme/colors';

export const status = {
  ONGOING: 1,
  PENDING: 2,
  COMPLATED: 3,
  CANCEL: 4,
};

export const headerTasks = [
  {
    id: 1,
    title: 'Ongoing',
    color: AppColors.ONGOING,
    icon: <ChartCircle size={32} color={AppColors.WHITE} />,
  },
  {
    id: 2,
    title: 'Pending',
    color: AppColors.PENDING,
    icon: <Clock size={32} color={AppColors.WHITE} />,
  },
  {
    id: 3,
    title: 'Completed',
    color: AppColors.COMPLATED,
    icon: <TickCircle size={32} color={AppColors.WHITE} />,
  },
  {
    id: 4,
    title: 'Cancel',
    color: AppColors.CANCEL,
    icon: <CloseCircle size={32} color={AppColors.WHITE} />,
  },
];
