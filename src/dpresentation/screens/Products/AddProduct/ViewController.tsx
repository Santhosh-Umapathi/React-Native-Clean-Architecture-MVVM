import {useCallback, useState} from 'react';
import {addProduct, deleteProduct, updateProduct} from 'src/dDomain/Products';
import jsonData from '../../../../ddata/source/Products/json/Product.json';
import TProps from './types';
import useAddProductViewModel from './ViewModel';

const useAddProductViewController = ({navigation, route}: TProps) => {
  const {
    addProductHandler,
    products,
    deleteProductHandler,
    editProductHandler,
  } = useAddProductViewModel();

  const id = route?.params?.id;
  const product = products.products.find(i => String(i.id) === id);

  if (product) {
    navigation.setOptions({title: 'Edit Product'});
  }

  const [title, setTitle] = useState(product?.title || '');
  const [description, setDescription] = useState(product?.description || '');

  const onChangeTitle = (text: string) => {
    setTitle(text);
  };

  const onChangeDescription = (text: string) => {
    setDescription(text);
  };

  const saveHandler = useCallback(async () => {
    const {results} = await addProduct({
      ...jsonData,
      title,
      description,
      images: ['https://images.hdqwalls.com/wallpapers/react-js-logo-no.jpg'],
    });
    results && addProductHandler(results);

    navigation.goBack();
  }, [title, description]);

  const editHandler = useCallback(async () => {
    const {results} = await updateProduct(String(product?.id), {
      ...jsonData,
      id: String(product?.id),
      title,
      description,
      images: ['https://images.hdqwalls.com/wallpapers/react-js-logo-no.jpg'],
    });
    results && editProductHandler(results);

    navigation.goBack();
  }, [title, description]);

  const deleteHandler = async () => {
    const {results} = await deleteProduct(String(product?.id));
    results && deleteProductHandler(results);

    navigation.goBack();
  };

  return {
    title,
    description,
    onChangeTitle,
    onChangeDescription,
    saveHandler,
    imageUrl: product?.images[0],
    editHandler,
    deleteHandler,
  };
};

export default useAddProductViewController;
