import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined';
import { mainColor } from '@/Colors';

export const Logo = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className={`bg-${mainColor} p-2 rounded-md`}>
        <DataObjectOutlinedIcon sx={{ fontSize: 27, color: 'white' }} />
      </div>
      <div className="flex gap-1 text-[19px]">
        <span className={`font-bold text-${mainColor}`}>Snippet</span>
        <span className="text-slate-600">Master</span>
      </div>
    </div>
  );
};
