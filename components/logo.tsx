import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined';

export const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className={`bg-purple-600 p-2 rounded-md`}>
        <DataObjectOutlinedIcon sx={{ fontSize: 27, color: 'white' }} />
      </div>
      <div className="flex gap-1 text-[19px]">
        <span className={`font-bold text-purple-600`}>Snippet</span>
        <span className="text-slate-600">Master</span>
      </div>
    </div>
  );
};
