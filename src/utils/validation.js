import * as Yup from 'yup';

export const taskShema = Yup.object().shape({
  title: Yup.string().required('Zorunlu alan'),
  description: Yup.string().required('Zorunlu alan'),
  startDate: Yup.string().required('Zorunlu alan'),
  endDate: Yup.string().required('Zorunlu alan'),
});
