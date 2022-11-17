import {useCallback, useState} from 'react';
import {Product} from '../../../../di/instantiate';
import jsonData from '../../../../mock/product.json';
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

  const product = products.products.find(i => {
    return id && i.id === +id;
  });

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
    const results = await Product.addProduct.execute({
      ...jsonData,
      title,
      description,
      images: ['https://images.hdqwalls.com/wallpapers/react-js-logo-no.jpg'],
    });
    results && addProductHandler(results);

    navigation.goBack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description]);

  const editHandler = useCallback(async () => {
    const results = await Product.updateProduct.execute(product!.id, {
      ...jsonData,
      id: product!.id,
      title,
      description,
      images: ['https://images.hdqwalls.com/wallpapers/react-js-logo-no.jpg'],
    });
    results && editProductHandler(results);

    navigation.goBack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description]);

  const deleteHandler = async () => {
    const results = await Product.deleteProduct.execute(product!.id);
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
