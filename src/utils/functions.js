import {
  ChartCircle,
  Clock,
  CloseCircle,
  TickCircle,
} from 'iconsax-react-native';
import AppColors from '../theme/colors';
import {View} from 'react-native';

const formatedDate = date => {
  return new Date(date).toLocaleDateString('tr-TR');
};

const statusIcon = cat => {
  switch (cat) {
    case 1:
      return (
        <View
          style={{
            backgroundColor: AppColors.ONGOING,
            padding: 5,
            borderRadius: 10,
          }}>
          <ChartCircle size={28} color={AppColors.WHITE} />
        </View>
      );
    case 2:
      return (
        <View
          style={{
            backgroundColor: AppColors.PENDING,
            padding: 5,
            borderRadius: 10,
          }}>
          <Clock size={28} color={AppColors.WHITE} />
        </View>
      );

    case 3:
      return (
        <View
          style={{
            backgroundColor: AppColors.COMPLATED,
            padding: 5,
            borderRadius: 10,
          }}>
          <TickCircle size={28} color={AppColors.WHITE} />
        </View>
      );
    case 4:
      return (
        <View
          style={{
            backgroundColor: AppColors.CANCEL,
            padding: 5,
            borderRadius: 10,
          }}>
          <CloseCircle size={28} color={AppColors.WHITE} />
        </View>
      );

    default:
      break;
  }
};

const getStatus = status => {
  switch (status) {
    case 1:
      return 'Ongoing';
    case 2:
      return 'Pending';

    case 3:
      return 'Completed';

    case 4:
      return 'Cancel';

    default:
      break;
  }
};

const getCategory = cat => {
  switch (cat) {
    case 0:
      return 'Software';
    case 1:
      return 'Desing';

    case 2:
      return 'Operation';

    default:
      return 'General';
  }
};

export {formatedDate, statusIcon, getCategory, getStatus};
