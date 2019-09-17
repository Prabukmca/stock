import { StrengthPipe } from './strength.pipe';

fdescribe('StrengthPipe', () => {
  fit('create an instance', () => {
    const pipe = new StrengthPipe();

    expect(pipe.transform(5)).toEqual('5 (weak)');
  });
});
