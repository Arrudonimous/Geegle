import Button from '../../components/button';

export default function HomeButtons() {
  return (
    <div className='flex items-center justify-center gap-7 flex-col font-[itim]'>
      <Button size='large' label='Jogar' />
      <Button size='medium' label='Proposta' />
      <Button size='small' label='Sair' />
    </div>
  );
}
