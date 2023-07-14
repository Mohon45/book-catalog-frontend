const Books = () => {
  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
      <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
        <div>
          <h1 className="text-2xl uppercase">Availability</h1>
          <div
            // onClick={() => dispatch(toggleState())}
            className="flex items-center space-x-2 mt-3"
          >
            {/* <Switch id="in-stock" />
            <Label htmlFor="in-stock">In stock</Label> */}
          </div>
        </div>
      </div>
      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
        {/* {productsData?.map((product: IProduct) => (
          <ProductCard product={product} />
        ))} */}
      </div>
    </div>
  );
};

export default Books;
